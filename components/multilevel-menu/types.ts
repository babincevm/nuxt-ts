import type {RouteLocationRaw} from "vue-router";

export type TMenu = (
    { title: string; to: RouteLocationRaw; children?: never; } |
    { title: string; to?: never; children: TMenu[]; } |
    { title: string; to?: never; children?: never; }
    )
