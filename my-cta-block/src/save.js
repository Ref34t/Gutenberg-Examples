import { RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { title, description, buttonText, buttonUrl } = attributes;

    return (
        <div className="cta-block">
            <RichText.Content
                tagName="h2"
                value={title}
            />
            <RichText.Content
                tagName="p"
                value={description}
            />
            <div className="cta-button">
                <a href={buttonUrl}>{buttonText}</a>
            </div>
        </div>
    );
};

export default Save;