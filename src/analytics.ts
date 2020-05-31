import * as $ from 'jquery'; 

function createAnalytics(): object {
    let counter = 0;
    let isDestroyed: boolean = false;
    const clicksCollector = [];

    const listener = (): any => {
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

window['analytics'] = createAnalytics();
