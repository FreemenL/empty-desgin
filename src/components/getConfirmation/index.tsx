import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

function ConFirm({ message, callback, nodeIdName }) {
    return (
        <div className={styles['prompt']}>
            <div className={styles["prompt-modal"]}>
                <p><span>!</span>{message}</p>
                <section>{message},确定离开？</section>
                <button className={styles["sure"]} onClick={() => { callback(true); ReactDOM.unmountComponentAtNode(document.getElementById(nodeIdName) as HTMLElement) }}>确定</button>
                <button className={styles["cancel"]} onClick={() => { callback(false); ReactDOM.unmountComponentAtNode(document.getElementById(nodeIdName) as HTMLElement) }}>取消</button>
            </div>
        </div>
    )
}

const getConfirmation = (nodeIdName) => (message, callback) => {
    const firstNode: any = document.body.childNodes[0];
    if (firstNode["nodeType"] == 3 && /\s/.test(firstNode.nodeValue)) {
        document.body.removeChild(firstNode);
    }
    const oneNode: any = document.body.childNodes[0];
    if (oneNode.getAttribute("id").trim() !== nodeIdName) {
        const emptyNode: any = document.createElement("div");
        emptyNode.setAttribute("id", nodeIdName);
        document.body.appendChild(emptyNode);
    }
    ReactDOM.render(
        <ConFirm message={message} callback={callback} nodeIdName={nodeIdName} />,
        document.getElementById(nodeIdName)
    )
}

export default getConfirmation;

















