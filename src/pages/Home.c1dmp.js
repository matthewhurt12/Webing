// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// "Hello, World!" Example: https://learn-code.wix.com/en/article/hello-world

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Display a welcome message if the element exists
    if ($w('#greetingText')) {
        $w('#greetingText').text = 'Welcome to our redesigned home page!';
    }

    // Show today's date in a text element with id "dateText" if present
    if ($w('#dateText')) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        $w('#dateText').text = `Today is ${formattedDate}`;
    }

    // Navigate to the Store page when the user clicks the learn more button
    if ($w('#learnMoreButton')) {
        $w('#learnMoreButton').onClick(() => {
            wixLocation.to('/store');
        });
    }
});
