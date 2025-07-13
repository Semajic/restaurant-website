import type { MenuSection } from '../menu';

export const menuSections: MenuSection[] = [
    {
        title: "// Appetizers //",
        items: [
            {
                name: "<Byte-Sized Bruschetta> {$18}",
                desc: "Heirloom tomatoes, basil chiffonade, balsamic reduction on garlic-rubbed toast",
            },
            {
                name: "<RAM Tartare> {$26}",
                desc: "Hand-chopped wagyu beef, quail egg yolk, pickled shallots, truffle aioli, served with sourdough chips",
            },
            {
                name: "<Null Pointer Soup> {$16}",
                desc: "Chilled cucumber and mint soup with compressed melon cubes and Greek yogurt foam",
            },
        ],
    },
    {
        title: "// Entrees //",
        items: [
            {
                name: "<Forked Duck Confit> {$44}",
                desc: "Twice-cooked duck leg with cherry-code compote, sweet potato mash, and a binary spice jus",
            },
            {
                name: "<Syntax Sea Bass> {$52}",
                desc: "Pan-seared Chilean sea bass, cauliflower purée, microgreens, with an async citrus beurre blanc",
            },
            {
                name: "<Stack Overflow Lamb> {$48}",
                desc: "Sous-vide lamb loin, nested atop wild mushroom risotto and garlic scapes, served with a recursive reduction",
            },
            {
                name: "<Vegan Commit> {$36}",
                desc: "Charred tofu blocks, rainbow quinoa tabbouleh, roasted root vegetables, and miso-ginger drizzle",
            },
        ],
    },
    {
        title: "// Sides //",
        items: [
            {
                name: "<Brussels Debug Sprouts> {$12}",
                desc: "Roasted with honey and miso glaze, topped with sesame seeds",
            },
            {
                name: "<Array of Roots> {$11}",
                desc: "Trio of root vegetables: parsnip, beet, and carrot chips with Sriracha aioli",
            },
            {
                name: "<Kernel Bread Basket> {$10}",
                desc: "Artisan rolls with compound butters: thyme, roasted garlic, and citrus-code",
            },
        ],
    },
    {
        title: "// Desserts //",
        items: [
            {
                name: "<Bitwise Brownie Stack> {$14}",
                desc: "Flourless brownie, caramel, espresso gelato",
            },
            {
                name: "<Floating Point Pavlova> {$15}",
                desc: "Meringue, mascarpone whip, passionfruit curd, berries",
            },
            {
                name: "<404 Cheesecake Not Found> {$16}",
                desc: "Deconstructed cheesecake with citrus gel spheres",
            },
        ],
    },
    {
        title: "// Drinks //",
        items: [
            {
                name: "<Cold Boot Martini> {$19}",
                desc: "Gin, vermouth, lemon-bitters RAM cube",
            },
            {
                name: "<The Recursion> {$21}",
                desc: "Layered Negroni on loop",
            },
            {
                name: "<Cloud Compiler (NA)> {$12}",
                desc: "Lychee, elderflower, tonic cloud, charcoal cube",
            },
            {
                name: "<Dark Mode Espresso> {$6}",
                desc: "Triple espresso shot, optional milk",
            },
        ],
    },
    {
        title: "// Chef's Specials //",
        items: [
            {
                name: "<Full Stack Tasting Menu> {$145}",
                desc: "Seven courses, specially curated by our executive chef",
            },
            {
                name: "<+ Dependency Injection> {$70}",
                desc: "Wine pairing for each course",
            },
        ],
    },
];
