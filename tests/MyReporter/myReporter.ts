import { Reporter, FullConfig, Suite, TestCase, TestResult, TestStep, FullResult } from '@playwright/test/reporter';

export default class MyReporter implements Reporter {
    onStdOut(chunk: string | Buffer, test: void | TestCase, result: void | TestResult) {
        const text = chunk.toString();
        // If the log has multiple lines, add the icon to each line for cleaner reading
        if (text.includes('\n')) {
             console.log(text.split('\n').map(line => `    📝 ${line}`).join('\n'));
        } else {
             console.log(`    📝 Output: ${text.trim()}`);
        }
    }

    // 1. Triggered once when the test run starts
    onBegin(config: FullConfig, suite: Suite) {
        console.log(`\n🚀 Starting the run with ${suite.allTests().length} tests...\n`);
    }

    // 2. Triggered when an individual test starts
    onTestBegin(test: TestCase) {
        console.log(`🧪 Test Started: ${test.title}`);
    }

    // 3. Triggered when a specific step finishes
    onStepEnd(test: TestCase, result: TestResult, step: TestStep) {
        // Filter out internal API calls (noise)
        if (step.category === "test.step") {
            // Check if this specific step had an error
            if (step.error) {
                console.log(`    ❌ Step Failed: ${step.title}`);
            } else {
                console.log(`    ✅ Step Completed: ${step.title}`);
            }
        }
        
        // Log errors for non-step actions (like assertion failures)
        if (step.error) {
            console.log(`    ⚠️ Error details: ${step.error.message}`);
        }
    }

    // 4. Triggered when the test finishes
    onTestEnd(test: TestCase, result: TestResult) {
        const icon = result.status === 'passed' ? '✅' : 
                     result.status === 'failed' ? '❌' : 
                     result.status === 'timedOut' ? '⏱️' : '⏭️'; // Skipped

        console.log(`${icon} Test Ended: ${test.title} | Status: ${result.status.toUpperCase()}\n`);
    }

    // 5. Triggered once at the very end
    onEnd(result: FullResult) {
        const icon = result.status === 'passed' ? '🎉' : '💥';
        console.log(`\n${icon} Finished the run: ${result.status.toUpperCase()}`);
    }
}