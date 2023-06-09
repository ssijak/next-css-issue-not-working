import { Button } from "ui";

import * as styles from './styles.css';
export default function Page() {
  return (
    <div style={{
        display: 'flex',
        alignItems: "center",
        gap: "20px"
    }}>
      <Button className={styles.niceColors}>Page.tsx</Button>
        <div>{"<---"} this button should have black background and white color but its styles are overwritten because button styles from ui lib are imported twice, both by layout and page. order seems to not be deterministic so problematic ordering does not happen 100% of times, but styles are imported multiple times anyhow.</div>
    </div>
  );
}
