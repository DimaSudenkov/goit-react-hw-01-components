import user from "../components/Profile/user.json";
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/Transaction/transactions.json'


import FriendList from "./FriendList/friendList";
import Profile from "./Profile/profile";
import Statistics from './Statistics/statistics';
import TransactionHistory from "./Transaction/transaction";
import '../index.css'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'3%'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      items={transactions}
      />
    </div>
  );
};
