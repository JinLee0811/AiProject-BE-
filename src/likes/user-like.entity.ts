// import { Board } from 'src/boards/board.entity';
// import { User } from 'src/users/entities/user.entity';
// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

// @Entity({ name: 'user_like' })
// export class UserLike {
//   @PrimaryGeneratedColumn({ unsigned: true })
//   id: number;

//   @Column()
//   is_liked: boolean;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   created_at: Date;

//   @ManyToOne(() => Board, (board) => board.likes)
//   board: Board;

//   @ManyToOne(() => User, (user) => user.likes)
//   user: User;
// }
