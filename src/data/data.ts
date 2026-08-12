export interface Feature {
    title: string;
    desc: string;
}

export const featuresData: Feature[] = [
    { title: 'Webpack 5 🚀', desc: 'Blazing fast builds with content hashing and clean architecture.' },
    { title: 'Assets 🖼️', desc: 'Seamlessly loading images and local fonts using asset modules.' },
    { title: 'Lodash 🛠️', desc: 'Optimized chunk splitting for vendor files to reduce load time.' },
    { title: 'TypeScript 📘', desc: 'Strict typing and modern JavaScript features compiled smoothly.' },
    { title: 'Sass/LESS 🎨', desc: 'Dynamic styling with SCSS and LESS preprocessors.' }
];
