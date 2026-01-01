import { test, expect } from '@playwright/test';

test.describe("API Testing Demo (using ReqRes.in)", () => {

    const baseUrl = "https://reqres.in/api/users";
    
    // We will store the ID of the user we create to use in later steps
    let userId: string;

    // 1. CREATE (POST)
    test("1. Create User via API", async ({ request }) => {
        const response = await request.post(baseUrl, {
            data: {
                name: "Koushik",
                job: "Automation Lead"
            }
        });

        // Verify status is 201 (Created)
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        console.log("Create Response:", responseBody);

        // Store the ID (ReqRes generates a random ID like '952')
        userId = responseBody.id;
        
        // Assert the response contains what we sent
        expect(responseBody.name).toBe("Koushik");
        expect(responseBody.job).toBe("Automation Lead");
    });

    // 2. READ (GET)
    test("2. Get User via API", async ({ request }) => {
        // ReqRes is a mock API, so data isn't actually "saved" on their server forever.
        // For this demo, we will query a hardcoded known user (e.g., ID 2) 
        // because the ID from Step 1 doesn't persist in their mock DB.
        const response = await request.get(`${baseUrl}/2`);

        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        console.log("Get Response:", responseBody);
        
        expect(responseBody.data.first_name).toBe("Janet");
    });

    // 3. UPDATE (PUT/PATCH)
    test("3. Update User via API", async ({ request }) => {
        const response = await request.put(`${baseUrl}/2`, {
            data: {
                name: "Koushik Updated",
                job: "Manager"
            }
        });

        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        console.log("Update Response:", responseBody);
        
        expect(responseBody.job).toBe("Manager");
    });

    // 4. DELETE (DELETE)
    test("4. Delete User via API", async ({ request }) => {
        const response = await request.delete(`${baseUrl}/2`);

        // ReqRes returns 204 (No Content) for successful delete
        expect(response.status()).toBe(204);
        console.log("Delete Status:", response.status());
    });
});