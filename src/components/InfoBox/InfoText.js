import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  // 사이드메뉴 자기소개 영역
  text: {
    display: "block",
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: ".95em",
    textAlign: "left",
    marginTop: "1rem",
    marginBottom: "1rem",
    "& p:first-child": {
      marginTop: 0
    },
    "& p:last-child": {
      marginBottom: 0
    }
  }
});

const InfoText = props => {
  const { classes, info } = props;
  const text = info.node.html;

  return <div className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />;
};

InfoText.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired
};

export default injectSheet(styles)(InfoText);
