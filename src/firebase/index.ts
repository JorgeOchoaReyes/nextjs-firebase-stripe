import {initializeApp, getApps, type FirebaseOptions} from "firebase/app"; 
import {getAuth} from "firebase/auth";   

const parseConfig = (JSON.parse(process.env.NEXT_PUBLIC_FIREBASE ?? "{}") ?? {}) as FirebaseOptions;

const app = getApps().length > 0 ? getApps()[0] : initializeApp(parseConfig);
const auth = getAuth(app);

export async function getFirebaseIdToken(forceRefresh = false): Promise<string | null> {
  if (auth.currentUser) {
    try {
      const token = await auth.currentUser.getIdToken(forceRefresh);
      return token;
    } catch (error) {
      console.error("Error getting Firebase ID token:", error);
      return null;
    }
  }
  return null;
}

export { app, auth };