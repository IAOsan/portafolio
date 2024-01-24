import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import db from '../db';
import dataFallback from '../data.json';

const defaultState = {
	about: {
		heading: '',
		subHeading: '',
		mainDescription: '',
		image: '',
	},
	skills: {
		title: '',
		data: [],
	},
	social: [],
	projects: [],
	sections: [],
	contactDescription: '',
};
export const AppContext = createContext();

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context)
		throw new Error('"AppContext" should be used within AppContextProvider');
	return context;
}

function AppContextProvider({ children }) {
	const [data, setData] = useState(defaultState);
	const [shouldRenderApp, setShouldRenderApp] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const snapshot = await getDocs(collection(db, '/data'));
				const docsList = snapshot.docs.map((doc) => doc.data())[0];
				setData(docsList);
				setShouldRenderApp();
			} catch (error) {
				setData(dataFallback);
			} finally {
				setShouldRenderApp(true);
			}
		})();
	}, []);

	return (
		<AppContext.Provider value={{ ...data, shouldRenderApp }}>
			{children}
		</AppContext.Provider>
	);
}

export default AppContextProvider;
