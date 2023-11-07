const NoResults = ({searchQuery}) => {
    return  (
        <div className="text-white text-md w-full flex justify-center items-center mt-[90px]">
            <div className="px-3 py-5">
                <p className="mb-3">Your search for "{searchQuery}" did not find any matches.</p>
                <p className="mb-3">Suggestions:</p>
                <ul className="list-disc pl-8">
                    <li>Try different keywords</li>
                    <li>Looking for a movie or TV show?</li>
                    <li>Try using a movie, TV show title, an actor or director.</li>
                    <li>Try a genre, such as comedy, romance, sports or drama.</li>
                </ul>
            </div>

        </div>
    )
}

export default NoResults;