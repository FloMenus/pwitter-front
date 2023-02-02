import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import { API_URL, API_KEY } from "@env";

export const supabase = createClient(API_URL, API_KEY);
