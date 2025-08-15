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
