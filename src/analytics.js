import * as $ from 'jquery'; 

function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    const clicksCollector = [];

    const listener = () => {
        const singleClick = {
            clickNumber: counter++,
            clickTime: Date.now()
        }

        clicksCollector.push(singleClick);
    };
    
    $(document).on('click', listener);
    
    return {
        destroy() {
            $(document).off('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed';
            }
            return counter;
        },

        getClicksCollection() {
            if (isDestroyed) {
                return 'Analytics is destroyed';
            }

            return clicksCollector;
        }
    }
}

window.analytics = createAnalytics();
