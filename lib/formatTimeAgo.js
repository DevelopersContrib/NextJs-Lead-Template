import moment from "moment";

const formatTimeAgo = (rawDate) => {
  return moment(new Date(rawDate)).fromNow();
};
export default formatTimeAgo;
