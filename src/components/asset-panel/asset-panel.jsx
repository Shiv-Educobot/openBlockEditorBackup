import React from 'react';

import Box from '../box/box.jsx';
import Selector from './selector.jsx';
import styles from './asset-panel.css';

const AssetPanel = props => (
    <Box className={localStorage.getItem("darkMode") == "true" ? styles.wrapperDark : styles.wrapper}>
        <Selector
            className={styles.selector}
            // darkMode={props.darkMode}
            {...props}
        />
        <Box className={styles.detailArea}>
            {props.children}
        </Box>
    </Box>
);

AssetPanel.propTypes = {
    ...Selector.propTypes
};

export default AssetPanel;
