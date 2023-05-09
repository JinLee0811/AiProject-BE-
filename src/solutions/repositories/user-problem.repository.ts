import {Injectable, NotFoundException} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Solution } from "../entities/solution.entity";
import {UserProblem} from "../entities/user-problem.entity";
import {CreateUsersolutionDto} from "../dto/create-Usersolution.dto";

@Injectable()
export class UserProblemRepository extends Repository<UserProblem> {
    constructor(private dataSource: DataSource) {
        super(UserProblem, dataSource.createEntityManager());
    }

    // createSolutions: (마이페이지) 해결책 자장
    async  createUserSolution(userId:number, createUserSolutionDto: CreateUsersolutionDto) {
        // user_problem 테이블 저장
        const {solutionId, image, resolvedAt} = createUserSolutionDto
        const userSolution = this.create({
            userId,
            solutionId,
            image,
            resolvedAt
        })
        await this.save(userSolution)
    }


    // getSolutions: (마이페이지) 해결책 조회
    async getUserSolutions(user_id:number) {
        // user_problem, solution 테이블 조인
        const userSolutions = await this.createQueryBuilder('userSolution')
            .leftJoinAndSelect("userSolution.solution", "solution")
            .where("userSolution.user_id = :user_id", {user_id})
            .select(['userSolution.id', 'userSolution.image', 'userSolution.createdAt', 'userSolution.resolvedAt', 'solution'])
            .getMany()

        return userSolutions

    }


    // deleteSolutionsById: (마이페이지) 해결책 삭제
    async deleteUserSolutionById(userSolutionId:number) {
        // user_problem 테이블
        const result = await this.delete({id: userSolutionId})
        if (result.affected === 0) {
            throw new NotFoundException((`Can't find user solution with Id ${userSolutionId}`))
        }
        return {"message" : "Success"}
    }


}
