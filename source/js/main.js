import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { initNavToggle } from './nav-toggle';
import { initSwiperHiro } from './swiper-hero';
import { initSwiperTours } from './swiper-tours';
import { initSwiperTraining } from './swiper-training';
import { initSwiperReviews } from './swiper-reviews';
import { initSwiperAdv } from './swiper-adv';
import { initSwiperGallery } from './swiper-gallery';
import { initValidationForm } from './form-validate';

initNavToggle();
initSwiperHiro(Swiper, Pagination);
initSwiperTours(Swiper, Navigation);
initSwiperTraining(Swiper, Navigation);
initSwiperReviews(Swiper, Navigation);
initSwiperAdv(Swiper, Navigation);
initSwiperGallery(Swiper, Navigation);
initValidationForm();
