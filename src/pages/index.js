import React, { useState } from 'react';
import Layout from '@theme/Layout';
import '../css/index.css'
import Introduction from './components/Intro/Introduction';
import BookList from './components/Book-list/BookList';

export default function App() {
  const [books, setBooks] = useState([
    {'id': "1", 'title' :'📖 Middlemarch', 'link':'/ai_summary_chen/middlemarch'},
    {'id': "2", 'title' :'📖 The Mill on the Floss', 'link':'/ai_summary_chen/The Mill on the Floss'},
    {'id': "3", 'title' :'📖 Romola', 'link':'/ai_summary_chen/romola'},
    {'id': "4", 'title' :'📖 Daniel Deronda', 'link':'/ai_summary_chen/Daniel Deronda'},
    {'id': "5", 'title' :'📖 Impressions of Theophrastus Such', 'link':'/ai_summary_chen/Impressions of Theophrastus Such'},
    {'id': "6", 'title' :'📖 Adam Bede', 'link':'/ai_summary_chen/Adam Bede'},
    {'id': "7", 'title' :'📖 Scenes of Clerical Life', 'link':'/ai_summary_chen/Scenes of Clerical Life'},
    {'id': "8", 'title' :'📖 Silas Marner', 'link':'/ai_summary_chen/Silas Marner'},
    {'id': "9", 'title' :'📖 Felix Holt, the Radical', 'link':'/ai_summary_chen/Felix Holt, the Radical'},
  ]);

  return (
    <Layout title="ai_summary_chen" description="Introduction">
      <BookList listData={books} />
      <Introduction />
    </Layout>
  );
}