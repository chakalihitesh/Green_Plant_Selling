import fetch from 'node-fetch';

async function runNetworkTests() {
    console.log("Starting Local Network OTP tests...");

    const IP_URL = 'http://10.226.101.198:3001';

    try {
        // Test 1: Send OTP to empty email via Wi-Fi IP
        console.log(`\n--- Test 1: Empty Email via ${IP_URL} ---`);
        let res = await fetch(`${IP_URL}/api/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });
        console.log("Status:", res.status);
        console.log("Body:", await res.json());

        // Test 2: Send OTP via Wi-Fi IP
        console.log(`\n--- Test 2: Valid Email via ${IP_URL} ---`);
        res = await fetch(`${IP_URL}/api/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'chakalihitesh@gmail.com' })
        });
        console.log("Status:", res.status);
        console.log("Body:", await res.json());

        console.log("\n✅ Network requests to backend are functioning normally.");
    } catch (e) {
        console.error("\n❌ Network request failed. Backend might be dropping connections or Firewall is blocking:", e.message);
    }
}

runNetworkTests();
