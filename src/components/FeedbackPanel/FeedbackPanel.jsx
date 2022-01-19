import React from "react";
import styles from "./FeedbackPanel.module.scss";

const FeedbackPanel = (props) => {
  const { header, text } = props;
  return (
    <section className={styles.feedbackCard}>
      <div className={styles.feedback}>
        <h2 className={styles.feedbackTitle}>{header}</h2>
        <p className={styles.feedbackText}>{text}</p>
      </div>
    </section>
  );
};

export default FeedbackPanel;
