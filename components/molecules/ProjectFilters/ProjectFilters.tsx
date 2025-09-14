import { useState, useEffect } from 'react';
import styles from './ProjectFilters.module.scss';

interface ProjectFiltersProps {
    projects: Array<{
        year_completed: string;
    }> | undefined;
    onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
    year: string;
    status: string;
}

const ProjectFilters = ({ projects, onFilterChange }: ProjectFiltersProps) => {
    const [filters, setFilters] = useState<FilterState>({
        year: 'all',
        status: 'all'
    });

    // Get unique years from projects
    const getUniqueYears = () => {
        if (!projects || !Array.isArray(projects)) return [];
        
        const years = projects
            .map(project => project.year_completed)
            .filter(year => year && year !== 'In Progress')
            .map(year => parseInt(year))
            .filter(year => !isNaN(year))
            .sort((a, b) => b - a); // Sort descending
        
        return Array.from(new Set(years));
    };

    const uniqueYears = getUniqueYears();

    const handleFilterChange = (filterType: keyof FilterState, value: string) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const clearFilters = () => {
        const resetFilters = { year: 'all', status: 'all' };
        setFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    const hasActiveFilters = filters.year !== 'all' || filters.status !== 'all';

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersWrapper}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Year:</label>
                    <select 
                        className={styles.filterSelect}
                        value={filters.year}
                        onChange={(e) => handleFilterChange('year', e.target.value)}
                    >
                        <option value="all">All Years</option>
                        {uniqueYears.map(year => (
                            <option key={year} value={year.toString()}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Status:</label>
                    <select 
                        className={styles.filterSelect}
                        value={filters.status}
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                    >
                        <option value="all">All Projects</option>
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                    </select>
                </div>

                {hasActiveFilters && (
                    <button 
                        className={styles.clearButton}
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectFilters;
