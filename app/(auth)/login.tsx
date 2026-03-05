import { StyleSheet, View } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { supabase } from "@/lib/supabase";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});

async function signInWithGoogle() {
  await GoogleSignin.hasPlayServices();
  const response = await GoogleSignin.signIn();

  if (!response.data?.idToken) {
    throw new Error("No ID token returned from Google");
  }

  await supabase.auth.signInWithIdToken({
    provider: "google",
    token: response.data.idToken,
  });
}

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <GoogleSignin.Button
        size={GoogleSignin.Button.Size.Wide}
        color={GoogleSignin.Button.Color.Dark}
        onPress={signInWithGoogle}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: 250,
    height: 50,
    marginVertical: 8,
  },
});
