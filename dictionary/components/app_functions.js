import React from 'react'
import { SectionList, Text } from 'react-native'
const styles = require('./src/styles')

const displayDefSections = definitions => {
    const array = Object.entries(definitions).map((key, value) => ({
        title: key,
        data: value,
    }))
    return (
        <SectionList
            sections={array}
            renderItem={({ item }) => (
                <Text style={styles.definition}>{item}</Text>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
        />
    )
}

module.exports = displayDefSections
