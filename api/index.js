import express from 'express';
import data from '../src/testData';

const Router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

Router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

Router.get('/contests/:contestId', (req, res) => {
  // let contest = { ...contests[req.params.contestId] };
  // eslint-disable-next-line prefer-const
  let contest = contests[req.params.contestId];
  // console.info({ ...data.contests });
  contest.description = `/api/contests/${req.params.contestId} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  res.send(contest);
});

export default Router;
