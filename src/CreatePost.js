import React, { useState } from "react";

function CreatePost() {
    const [authorId, setAuthorId] = useState("");
    const [content, setContent] = useState("");

    const handleSave = async () => {
        const postData = {
            authorId: parseInt(authorId, 10),
            content,
        };

        try {
            const response = await fetch("http://localhost:8081/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                alert("Post created successfully!");
                setAuthorId("");
                setContent("");
            } else {
                alert("Failed to create post");
            }
        } catch (error) {
            console.error("Error creating post:", error);
            alert("An error occurred while creating the post.");
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Author ID
                    </label>
                    <input
                        type="number"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Content
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
