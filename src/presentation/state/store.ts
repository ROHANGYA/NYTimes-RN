import {create} from 'zustand';

type GlobalStore = {};

export const globalStore = create<GlobalStore>(set => ({}));
