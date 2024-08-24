import styles from './Loading.module.scss';

const Loading = ({
    hasError = false
}: {
    hasError: boolean
}) => {

    return (
        <div className={styles.loading}>
            <div className={styles.loadingInner}>
                {hasError ? 
                    <h1>500</h1>:
                    <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
                        <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style={{opacity:0.5}}/>
                        <circle fill="#fff" stroke="#fff" stroke-width="3" cx="8" cy="54" r="6">
                            <animateTransform
                            attributeName="transform"
                            dur="2s"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                        </circle>
                    </svg>
                }
                <p>{hasError ? 'Something went wrong!' : 'Hold there for a sec...'}</p>
            </div>
        </div>
    )
}

export default Loading;