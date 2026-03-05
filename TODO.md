# TODO

## Add Apple Sign-In

Requires a personal Apple Developer Program membership ($99/year).

1. Enroll in Apple Developer Program with personal Apple ID
2. Create App ID with bundle ID `com.hvihvi.downbeat`, enable "Sign in with Apple" capability
3. Enable Apple provider in Supabase (Authentication > Providers > Apple), set Services ID to `com.hvihvi.downbeat`
4. Install packages: `npx expo install expo-apple-authentication expo-crypto`
5. Add `"expo-apple-authentication"` to plugins and `"usesAppleSignIn": true` to `ios` section in `app.json`
6. Add Apple sign-in button and `signInWithApple()` to `app/(auth)/login.tsx`
