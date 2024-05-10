import { Text, View, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { useAppwrite } from "../../lib/useAppwrite";
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider';

const Bookmark = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);


  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true)
    await refetch();
    setRefreshing(false)

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 space-y-6">
               {/* Saved Videos */}
              <Text className="text-2xl mb-4 text-white font-psemibold">Saved Video</Text>
              <SearchInput placeholder={"Search For Saved Videos"} />
              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100 text-lg font-pregular mb-3">
                  Latest Video
                </Text>
                <Trending posts={latestPosts ?? []} />
              </View>
            </View>
          )
        }
        }
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the First to Upload a Video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Bookmark
