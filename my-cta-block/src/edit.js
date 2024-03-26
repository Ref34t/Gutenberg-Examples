import { __ } from '@wordpress/i18n';
import { RichText, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const { title, description, buttonText, buttonUrl } = attributes;

    return (
        <div>
            <InspectorControls>
                <PanelBody title={__('Call to Action Settings')}>
                    <TextControl
                        label={__('Title')}
                        value={title}
                        onChange={value => setAttributes({ title: value })}
                    />
                    <TextControl
                        label={__('Description')}
                        value={description}
                        onChange={value => setAttributes({ description: value })}
                    />
                    <TextControl
                        label={__('Button Text')}
                        value={buttonText}
                        onChange={value => setAttributes({ buttonText: value })}
                    />
                    <URLInputButton
                        url={buttonUrl}
                        onChange={value => setAttributes({ buttonUrl: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="cta-block">
                <RichText
                    tagName="h2"
                    placeholder={__('Enter title...')}
                    value={title}
                    onChange={value => setAttributes({ title: value })}
                />
                <RichText
                    tagName="p"
                    placeholder={__('Enter description...')}
                    value={description}
                    onChange={value => setAttributes({ description: value })}
                />
                <div className="cta-button">
                    <a href={buttonUrl}>{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default Edit;