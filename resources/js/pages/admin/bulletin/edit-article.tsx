import ArticleEditor from './article-editor';

export default function EditArticle({ article }: { article: any }) {
    return <ArticleEditor mode="edit" article={article} />;
}
