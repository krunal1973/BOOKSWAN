import React from 'react';

const articles = [
  {
    title: 'Can Reading Make You Happier?',
    link: 'https://www.newyorker.com/culture/cultural-comment/can-reading-make-you-happier?utm_source=chatgpt.com',
    summary: 'This article discusses bibliotherapy, the practice of using books for therapeutic purposes. It highlights how personalized reading recommendations can help individuals cope with grief and provide solace during challenging times.',
  },
  {
    title: 'The Impact of Books',
    link: 'https://stanforddaily.com/2019/11/08/the-impact-of-books/?utm_source=chatgpt.com',
    summary: 'Explores how reading cultivates empathy by allowing readers to experience situations of success, failure, and personal growth through others\' perspectives.',
  },
  {
    title: 'A Chapter a Day – Association of Book Reading with Longevity',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5105607/?utm_source=chatgpt.com',
    summary: 'This study examines the potential survival advantage of reading books, suggesting that engaging with books may lead to cognitive benefits that contribute to increased longevity.',
  },
  {
    title: 'Reading Books May Help You Live Longer',
    link: 'https://uoflhealth.org/articles/reading-books-may-help-you-live-longer/?utm_source=chatgpt.com',
    summary: 'Highlights how immersing oneself in books can positively impact cognition, suggesting that reading may help maintain or enhance cognitive functions, especially in older adults.',
  },
  {
    title: 'Why is Reading Important? 13 Benefits for Readers',
    link: 'https://www.95percentgroup.com/insights/reading-importance/?utm_source=chatgpt.com',
    summary: 'Outlines various benefits of reading, including improved memory, vocabulary, and a deeper understanding of life, emphasizing reading as a lifelong skill.',
  },
  {
    title: 'The Power of Books: How Reading Impacts Your Life',
    link: 'https://nealsmead.medium.com/the-power-of-books-how-reading-impacts-your-life-34f28fce0f82?utm_source=chatgpt.com',
    summary: 'Discusses how books provide knowledge, improve language and cognitive skills, offer emotional support, and inspire personal growth.',
  },
  {
    title: 'What Positive Changes Has Reading Books Brought in Your Life?',
    link: 'https://www.reddit.com/r/BooksThatFeelLikeThis/comments/1byd6ng/what_positive_changes_has_reading_books_brought/?utm_source=chatgpt.com',
    summary: 'A Reddit discussion where users share personal experiences on how reading has taught them empathy, understanding, and broadened their perspectives.',
  },
  {
    title: 'The Survival Advantage of Reading Books',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6245064/?utm_source=chatgpt.com',
    summary: 'Findings suggest that book readers experience a reduction in mortality risk, indicating that reading books may contribute to a longer life.',
  },
  {
    title: 'Physical and Mental Health Benefits of Reading Books',
    link: 'https://www.nuvancehealth.org/health-tips-and-news/physical-and-mental-health-benefits-of-reading-books?utm_source=chatgpt.com',
    summary: 'Explores how reading can keep the brain active and healthy, boost mood and mental health, and is even linked to increased longevity.',
  },
  {
    title: '6 out of 10 Brits Make a Major Life Decision After Reading a Book',
    link: 'https://www.thesun.ie/news/12611670/reading-inspirational-books-samsung-galaxy-tab/?utm_source=chatgpt.com',
    summary: 'A study revealing that reading inspirational books has led many to make significant life changes, such as career shifts or learning new skills.',
  },
  {
    title: 'Banning Books Isn\'t Just Morally Wrong. It\'s Also Unhealthy',
    link: 'https://time.com/7094430/book-banning-health-consequences/?utm_source=chatgpt.com',
    summary: 'Discusses the negative impacts of book banning on young people\'s development and society\'s overall health, emphasizing the importance of access to diverse stories.',
  },
  {
    title: 'Author Jessamine Chan Uses Books as Conversation Starters',
    link: 'https://people.com/author-jessamin-chan-uses-books-as-conversation-starters-exclusive-8750327?utm_source=chatgpt.com',
    summary: 'Highlights how books can serve as conversation starters and provide solace or intellectual stimulation, fostering connections among readers.',
  },
  {
    title: 'Michael Morpurgo Backs Call to Ensure Poorer Children Have Access to Books',
    link: 'https://www.theguardian.com/education/2024/jan/17/michael-morpurgo-backs-call-to-ensure-poorer-children-have-access-to-books?utm_source=chatgpt.com',
    summary: 'Emphasizes the importance of providing books to children from low-income families to enrich their education and emotional well-being.',
  },
  {
    title: 'I Married Author I Met in My Scots Bookshop and My Daughter Predicted It',
    link: 'https://www.thesun.co.uk/fabulous/34332200/book-shop-owner-marries-author-meet-store-wedding/?utm_source=chatgpt.com',
    summary: 'A heartwarming story of how a shared love for books led to a romantic relationship and marriage, highlighting the community-building aspect of bookstores.',
  },
  {
    title: '10 Ways to Turn Your Child into a Devoted Bookworm',
    link: 'https://www.theaustralian.com.au/arts/review/10-ways-to-turn-your-child-into-a-devoted-bookworm/news-story/59898b4b97d0ae5e8b51dc0f981b4599?utm_source=chatgpt.com',
    summary: 'Provides practical strategies for fostering a lifelong love of reading in children, emphasizing the role of parental involvement and tailored book choices.',
  },
];

const ArticlePage = () => {
  const styles = {
    container: {
      padding: '2rem',
      fontFamily: "'Raleway', sans-serif",
      backgroundColor: '#F3F2EC',
    },
    articleCard: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      marginBottom: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontFamily: "'Prata', serif",
      color: '#2f2f2f',
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    summary: {
      color: '#757575',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    link: {
      color: '#C5A992',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>The Impact of Books on Life</h1>
      {articles.map((article, index) => (
        <div key={index} style={styles.articleCard}>
          <h2 style={styles.heading}>{article.title}</h2>
          <p style={styles.summary}>{article.summary}</p>
          <a href={article.link} style={styles.link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
