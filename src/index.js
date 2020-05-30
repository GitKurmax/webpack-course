 import * as $ from 'jquery';  
 import Post from '@models/Post';
 import json from './assets/json.json';
 import WebpackLogo from './assets/webpack-logo';
 import xml from './assets/data.xml';
 import csv from './assets/annual-balance.csv';  
 import './styles/styles.css';
 import './styles/less.less';
 import './styles/scss.scss';
 
 const post = new Post('Webpack Post Title', WebpackLogo); 

 $('pre').addClass('code').html(post.toString());

 console.log('Post to string: ', post.toString());
 console.log('Json', json);
 console.log('XML', xml);
 console.log('CSV', csv)