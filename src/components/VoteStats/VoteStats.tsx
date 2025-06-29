import type { Votes } from '../../types/votes';
import styles from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stars}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stars}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stars}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stars}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
