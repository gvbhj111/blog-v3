<script setup lang="ts">
import { myFeed } from '~~/blog.config'
import friends from '~/friends'


const appConfig = useAppConfig()
const layoutStore = useLayoutStore()
layoutStore.setAside([])

useSeoMeta({
    title: '友链',
    ogType: 'profile',
    description: `${appConfig.title}的友链页面，收集了添加他为友链的网站和他订阅的网站列表。`,
})

const copyFields = {
    博主: myFeed.author,
    标题: myFeed.title,
    介绍: myFeed.desc,
    网址: myFeed.link,
    头像: myFeed.avatar,
}

const { data: postLink } = await useAsyncData('/link', () => queryContent('/link').findOne())
</script>

<template>
    <header class="link-reminder">
        <div class="content">
            <p><Icon name="ph:newspaper-clipping-bold" /> 我会通过订阅源阅读友链文章。</p>
            <p>
                欢迎加入 QQ 群 <Tip copy>
                    {{ appConfig.qqGroup }}
                </Tip> 闲聊或技术交流。
            </p>
            <!-- 暂时注释掉 OPML 相关内容
            <p>
                我制作了本站的
                <ProseA href="/zhilu.opml">友链源 OPML 聚合</ProseA>，可导入阅读器或
                <ProseA href="https://app.follow.is/share/lists/72840182614552576">订阅 Folo List</ProseA>。
            </p>
            -->
        </div>
        <!-- ...rest of the template... -->
    </header>
</template>

<style lang="scss" scoped>
.link-reminder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.8rem 2rem;
    margin: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    background: var(--c-primary-soft);

    .content {
        flex-basis: 20em;
        flex-grow: 3;

        p + p {
            margin-top: 0.2em;
        }
    }

    .operations {
        display: flex;
        flex-basis: 10em;
        flex-grow: 1;
        justify-content: end;
        gap: 0.2em 1rem;
        flex-wrap: wrap;
    }
}

.link-tab {
    margin: 1rem;
}
</style>
