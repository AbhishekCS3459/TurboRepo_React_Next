import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button
        appName="next-app"
        className="bg-red-500"
      >
        Next app button
      </Button>
    </div>
  );
}
