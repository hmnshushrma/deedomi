declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const content: string;
    export { ReactComponent };
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}