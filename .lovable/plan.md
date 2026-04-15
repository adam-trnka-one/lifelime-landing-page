

## Problem

The `join-waitlist` edge function is not configured in `supabase/config.toml` with `verify_jwt = false`. This causes the preflight OPTIONS request to fail with a 404, which then produces the "w.json is not function" error on the client side.

## Fix

**File: `supabase/config.toml`** — Add the `join-waitlist` function configuration:

```toml
[functions.join-waitlist]
verify_jwt = false
```

This single change will allow the function to accept unauthenticated requests (which is correct for a public waitlist signup form). After this change, the function will be redeployed automatically.

## Additional Check

After deploying, we should also verify the CORS headers in the function are working correctly by testing with the curl tool.

