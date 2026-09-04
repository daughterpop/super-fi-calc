import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostByPath, allPosts } from '../data/posts';
import { ALL_CALCULATORS, CALCULATOR_BY_SLUG } from '../data/calculators';
import { editions, getEdition } from '../data/ledger';
import { buildOgImageUrl, defaultOgImage } from '../lib/ogUrl';

const SITE = 'https://www.viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';
const DEFAULT_OG = defaultOgImage();
const AUTHOR = 'Dustin Himmerich';
