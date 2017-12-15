import p5 from 'p5';
import io from 'socket.io-client';
import { url } from '../config';
import sketch from './js/sketch';

new p5(sketch);
