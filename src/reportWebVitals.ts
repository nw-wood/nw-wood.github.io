/* import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
 */

//this is a drop in replacement for the code in reportWebVitals.ts
//MetricType is imported instead, and the arrow function is getName
import { MetricType } from "web-vitals";

const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
			onCLS(onPerfEntry);
			onINP(onPerfEntry);
			onFCP(onPerfEntry);
			onLCP(onPerfEntry);
			onTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;