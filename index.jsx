import { renderToStaticMarkup } from 'react-dom/server.browser';

export default (Page, props) => {
    const result = renderToStaticMarkup(<Page {...props} />);
    return result;
}