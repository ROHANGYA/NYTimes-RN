import {NewsModel} from '../../models/newsModel';
import {NewsResponseModel} from '../../models/newsResponseModel';
import apiClient from './apiClient';
import {endpoints} from './apiEndpoints';

class NewsApi {
  async fetchMostViewedNews(): Promise<NewsModel[]> {
    const response = await apiClient.get<NewsResponseModel>(
      endpoints.MostViewedNews,
    );
    //await new Promise(resolver => setTimeout(resolver, 3000));
    return testREsponse.results;
  }
}

export default NewsApi;

const testREsponse: NewsResponseModel = {
  status: 'OK',
  copyright:
    'Copyright (c) 2025 The New York Times Company.  All Rights Reserved.',
  num_results: 20,
  results: [
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
    {
      id: 100000010038337,
      asset_id: 100000010038337,
      source: 'New York Times',
      published_date: new Date(),
      updated: new Date(),
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'United States Politics and Government;Government Employees;Layoffs and Job Reductions;Trump, Donald J;Rubio, Marco;Duffy, Sean P;Collins, Douglas A (1966- );Musk, Elon;State Department;Federal Aviation Administration;Veterans Affairs Department;Government Efficiency Department (US)',
      column: null,
      byline: 'By Jonathan Swan and Maggie Haberman',
      type: 'Article',
      title:
        'Inside the Explosive Meeting Where Trump Officials Clashed With Elon Musk',
      abstract:
        'Simmering anger at the billionaire’s unchecked power spilled out in a remarkable Cabinet Room meeting. The president quickly moved to rein in Mr. Musk.',
      media: [
        {
          caption:
            'Cabinet officials generally like the concept of what Elon Musk set out to do — reducing waste, fraud and abuse in government — but have been frustrated by the hacksaw approach to upending the government and the lack of consistent coordination.',
          copyright: 'Pete Marovich for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-thumbStandard.jpg',

              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo210-v2.jpg',

              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2025/03/07/multimedia/07dc-trump-musk-zqgm/07dc-trump-musk-zqgm-mediumThreeByTwo440-v2.jpg',

              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
  ],
};
