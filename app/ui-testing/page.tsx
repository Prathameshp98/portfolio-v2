import ImageContainer from "@/components/atoms/ImageContainer/ImageContainer";
import Icon from "@/components/atoms/Icon/Icon";
import Pill from "@/components/atoms/Pill/Pill";
import Anchor from "@/components/molecules/Link/Anchor";

const UiTesting = () => {
    return(
        <div 
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                margin: '100px'
            }}
        >
            <div
                style={{
                    padding: '40px'
                }}
            >
                <ImageContainer 
                    imageUrl="https://i.postimg.cc/vBHvcBkH/Screenshot-2024-08-13-at-9-44-00-PM.png"
                    altText="project-image"
                />
            </div>
            <div
                style={{
                    padding: '40px'
                }}
            >
                <Icon 
                    id={'1234'}
                    iconSrc={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>`}
                    width={30}
                    url={'https://nextjs.org/docs/pages/api-reference/components/link'}
                />
            </div>
            <div
                style={{
                    padding: '40px',
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <Pill id={'1234'} skill={'React'}/>
                <Pill id={'1234'} skill={'JavaScript'}/>
                <Pill id={'1234'} skill={'HTML/CSS'}/>
            </div>
            <div
                style={{
                    padding: '40px',
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <Anchor 
                    title={'View Full Resume'}
                    titleSize={'large'}
                    iconSrc={`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z\" clip-rule=\"evenodd\"></path></svg>`}
                    hasTextHighlight={false}
                    hasUnderline={true}
                    iconPosition={'right'}
                    hasBouncingIcon={true}
                    bounceDirection={'moveRight'}
                />
            </div>
        </div>
    )
}
export default UiTesting;
