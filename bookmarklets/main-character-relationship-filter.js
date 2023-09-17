javascript:(function() {
    const designatedTag = document.querySelector('h2.heading > a.tag')?.textContent ?? null;
    if (!designatedTag) {
        alert('No designated tag was found. The page will remain unchanged.');
        return;
    }
    const isRelationship = designatedTag.includes('/') || designatedTag.includes('&');
    const works = document.querySelectorAll('li.work.blurb');

    works.forEach((work) => {
        const firstRelationship = work.querySelector('li.relationships')?.textContent ?? null;
        if (isRelationship) {
            if (firstRelationship === designatedTag) {
                return;
            }
        } else {
            const workHasNoRelationship = !firstRelationship;
            const workHasRelevantFirstRelationship = firstRelationship && firstRelationship.includes(designatedTag);
            const characters = work.querySelectorAll('li.characters');
            if (
                (workHasNoRelationship || workHasRelevantFirstRelationship) && (
                    (characters.length > 0 && characters[0].textContent === designatedTag) ||
                    (characters.length > 1 && characters[1].textContent === designatedTag))
            ) {
                return;
            }
        }

        work.style.display = 'none';
    });
})();
