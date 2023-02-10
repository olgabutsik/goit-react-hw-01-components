import React from 'react';
import Container from './container/container';
import { ProfileApp } from 'components/Profile/Profile';
import { Statistics } from './Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
      <ProfileApp />
      <Statistics stats={data} title="Upload stats" />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
