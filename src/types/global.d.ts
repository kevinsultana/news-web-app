interface Multimedia {
  url: string;
  format: string;
}

interface News {
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  published_date: string;
  source: string;
  multimedia: Multimedia[];
}

interface BreakingNews {
  title: string;
  abstract: string;
  url: string;
}

interface SearchNews {
  headline: { main: string };
  abstract: string;
  byline: { original: string };
  multimedia: { default: { url: string } };
  source: string;
  pub_date: string;
  web_url: string;
}
