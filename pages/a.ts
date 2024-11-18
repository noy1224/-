// types.ts
export interface UMA {
 id: number;
 name: string;
 description: string;
 imageUrl: string;
}

// data.ts
import { UMA } from './types';

export const umaList: UMA[] = [
 {
   id: 1,
   name: 'チュパカブラ',
   description: '血を吸う謎の生物。',
   imageUrl: 'https://example.com/chupacabra.jpg',
 },
 {
   id: 2,
   name: 'ビッグフット',
   description: '巨大な足跡が残された謎の動物。',
   imageUrl: 'https://example.com/bigfoot.jpg',
 },
 // 他のUMAを追加
];